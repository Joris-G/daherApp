import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { Editor } from 'ngx-editor';
import { RequestType, ToolRequest, ToolRequestFormGroup } from 'src/app/_interfaces/tooling/tool-request-types';
import { ToolService } from 'src/app/tooling/services/tool.service';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { ToolRequestService } from 'src/app/tooling/services/tool-request.service';
import { Router } from '@angular/router';
import { ProgramsService } from 'src/app/shared/services/programs/programs.service';
import { AuthService } from 'src/app/shared/services/users/auth.service';
import { IonicModule } from '@ionic/angular';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription } from '@angular/material/expansion';
import { NgFor } from '@angular/common';
import { SboComponent } from '../sbo/sbo.component';
import { AuthStore } from 'src/app/shared/services/users/auth.store';
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
    standalone: true,
    imports: [
        IonicModule,
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelHeader,
        MatExpansionPanelTitle,
        MatExpansionPanelDescription,
        ReactiveFormsModule,
        NgFor,
        SboComponent,
    ],
})
export class NewToolPage implements OnInit {
  private readonly authStore: AuthStore = inject(AuthStore);
  public page: any;
  public requestTypeForm: FormGroup;
  public newToolForm: FormGroup;
  public newToolRequestForm: ToolRequestFormGroup;
  public programs: any[];
  // public editor: Editor;
  // public html: '';
  requestTypeEnum: typeof RequestType = RequestType;
  private newTool: Tool;

  constructor(
    private formBuilder: FormBuilder,
    private programService: ProgramsService,
    private toolService: ToolService,
    private toolRequestService: ToolRequestService,
    private router: Router,
  ) { }

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
    this.newToolRequestForm = new ToolRequestFormGroup();
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
      createdAt: new Date(),
      bloquantProd: false,
      demandeur: this.authStore.user(),
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
