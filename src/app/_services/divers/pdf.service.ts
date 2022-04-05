import { Injectable } from '@angular/core';
import JSPDF from 'jspdf';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import domtoimage, { Options } from 'dom-to-image';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File, IWriteOptions } from '@ionic-native/file/ngx';
import { PDFGenerator, PDFGeneratorOptions } from '@ionic-native/pdf-generator/ngx';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(
    private file: File,
    private fileOpener: FileOpener,
    private pdfGenerator: PDFGenerator,
  ) { }

  // createPdf(divToConvert: HTMLElement) {
  //   const options: PDFGeneratorOptions = {
  //     documentSize: 'A4',
  //     landscape: 'portrait',
  //   };
  //   const pngOptions: Options = {

  //   };
  //   const doc = new JSPDF('p', 'mm', 'a4');
  //   // this.pdfGenerator.fromData(divToConvert.innerHTML, options);
  //   domtoimage.toPng(divToConvert, pngOptions)
  //     .then((fileUrl) => {

  //       doc.addImage(fileUrl, 'PNG', 10, 10, 240, 180);

  //       const docRes = doc.output();
  //       const buffer = new ArrayBuffer(docRes.length);
  //       const array = new Uint8Array(buffer);
  //       for (let i = 0; i < docRes.length; i++) {
  //         array[i] = docRes.charCodeAt(i);
  //       }

  //       // this.file.dataDirectory = `C:/Users/j.grangier/Desktop/TRAVAIL/Appli-MOULAGE`;
  //       const directory = `C:/Users/j.grangier/Desktop/TRAVAIL/Appli-MOULAGE/`;
  //       console.log(directory);
  //       const fileName = 'user-data.pdf';
  //       const optionsWriteFile: IWriteOptions = {
  //         replace: true
  //       };
  //       console.log(this.file);

  //       // this.file.checkFile(directory, fileName)
  //       // .then(() => {
  //       Filesystem.writeFile({
  //         path: fileName,
  //         directory: Directory.ExternalStorage,
  //         data: docRes,
  //       })
  //         .then((res) => {
  //           console.log('File generated' + JSON.stringify(res));
  //           Filesystem.readFile({
  //             path: fileName,
  //             directory: Directory.ExternalStorage,
  //             encoding: Encoding.UTF8
  //           })
  //             .then((resFile) => {
  //               console.log(resFile);
  //             })
  //           //             this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
  //           //               .then(() => console.log('File is exported'))
  //           //               .catch(e => console.log(e));
  //         }).catch((error) => {
  //           console.log(JSON.stringify(error));
  //         });
  //       // })
  //       // .catch(() => {
  //       //         this.file.writeFile(directory, fileName, buffer).then((res) => {
  //       //           console.log('File generated' + JSON.stringify(res));
  //       //           this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
  //       //             .then(() => console.log('File exported'))
  //       //             .catch(e => console.log(e));
  //       //         })
  //       //           .catch((error) => {
  //       //             console.log(JSON.stringify(error));
  //       //           });
  //       // });
  //     })
  //     .catch((erro) => {
  //       console.error(erro);
  //     });
  // }

  makePdf(divToConvert: HTMLElement) {
    const pngOptions: Options = {
    };
    domtoimage.toJpeg(divToConvert, pngOptions)
      .then((fileUrl) => {
        pdfmake.vfs = pdfFonts.pdfMake.vfs;
        const docDefinition = {
          content: [
            {
              columns: [
                {
                  image: 'data:image/jpeg;base64,' + fileUrl,
                  // fit: [100, 100]
                },
              ]
            }
          ],
          pageSize: 'A4',
          pageOrientation: 'portrait'
        };
        pdfmake.createPdf(docDefinition).open();
      })
      .catch((err) => {
        console.error(err);

      });

  }

  openPDF(divToConvert: HTMLElement): void {

    html2canvas(divToConvert, {
      scale: 1,

    }).then((canvas) => {
      const PDF = new JSPDF('p', 'mm', 'a4');
      const FILEURI = canvas.toDataURL('image/png');

      const width = PDF.internal.pageSize.getWidth();
      const height = PDF.internal.pageSize.getHeight();

      const widthRatio = width / canvas.width;
      const heightRatio = height / canvas.height;

      const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
      PDF.addImage(FILEURI, 'png', 0, 0, canvas.width * ratio, canvas.height * ratio,);
      PDF.save('angular-demo.pdf');
    });
  }
}
