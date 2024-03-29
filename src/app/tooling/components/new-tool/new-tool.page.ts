import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProgramsService } from 'src/app/core/services/programs/programs.service';
// import { Editor } from 'ngx-editor';
import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request';
import { AuthService } from 'src/app/core/services/users/auth.service';
import { ToolService } from 'src/app/tooling/services/tool.service';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { ToolRequestService } from 'src/app/tooling/services/tool-request.service';
import { RequestType } from 'src/app/_enums/request-type';
import { Router } from '@angular/router';
const MENU_ITEMS = [
  {
    title: 'Nouvelle demande outillage',
    path: 'new-tool',
    type: 'button',
  },
  {
    title: 'Liste des demandes outillages',
    path: '/tool-requests',
    type: 'button',
  }
];
@Component({
  selector: 'app-new-tool',
  templateUrl: './new-tool.page.html',
  styleUrls: ['./new-tool.page.scss'],
})
export class NewToolPage implements OnInit {
  public page: any;
  public requestTypeForm: FormGroup;
  public newToolForm: FormGroup;
  public newToolRequestForm: FormGroup;
  public programs: any[];
  // public editor: Editor;
  // public html: '';
  requestTypeEnum: typeof RequestType = RequestType;
  private newTool: Tool;


  constructor(
    private formBuilder: FormBuilder,
    private programService: ProgramsService,
    private authService: AuthService,
    private toolService: ToolService,
    private toolRequestService: ToolRequestService,
    private router: Router,

  ) {
  }

  ngOnInit() {
    this.page = {
      pageTitle: 'Création d\'une demande',
      menuTitle: 'Menu outillage',
      menuItems: MENU_ITEMS,
      contentId: 'tooling-content'
    };

    this.programService.getPrograms()
      .subscribe((programList: any[]) => {
        this.programs = programList;
      });

    // this.editor = new Editor();
    // this.editor.setContent('html');
    this.newToolForm = this.formBuilder.group({
      sapToolNumber: new FormControl(),
      identification: new FormControl(),
      designation: new FormControl()
    });
    this.newToolRequestForm = this.formBuilder.group({
      aircraftProgram: new FormControl(),
      title: new FormControl(),
      description: new FormControl(),
      needDate: new FormControl()
    });
  }

  createToolClick() {
    // on créé l'OT en BDD
    this.toolService.createTool({
      designation: this.newToolForm.value.designation,
      identification: this.newToolForm.value.identification,
      sapToolNumber: this.newToolForm.value.sapToolNumber
    })
      .subscribe((tool: Tool) => {
        this.newTool = tool;
      },
        (error) => {
          console.error(error);
          // on affiche une erreur si l'OT n'a pas été créé
        });
  }

  createToolRequestClick() {
    // on créé la toolRequest si l'OT est créé correctement
    const toolRequest: ToolRequest = {
      type: RequestType.sbo,
      // title: this.newToolRequestForm.value.title,
      // Description: this.newToolRequestForm.value.description,
      dateBesoin: this.newToolRequestForm.value.needDate,
      createdAt: new Date(),
      demandeur: this.authService.authUser,
      outillage: this.toolService.getIri(this.newTool)
    };
    // on soummet la toolrequest
    this.toolRequestService.createToolRequest(toolRequest)
      .subscribe(() => {
        // Si la toolRequest est créé
        this.newToolForm.reset();
        this.newToolRequestForm.reset();
        this.router.navigate(['tool-requests']);
      },
        (error) => {
          console.error(error);
          // this.router.navigate(['tool-requests']);
          // Si la toolRequest nest pas correctement créée
        });
  }
}
