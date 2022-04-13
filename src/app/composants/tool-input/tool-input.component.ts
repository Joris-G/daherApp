import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, ValidationErrors, Validator } from '@angular/forms';
import { IonInput } from '@ionic/angular';
import { Tool } from 'src/app/_interface/tool';
import { ToolService } from 'src/app/_services/tools/tool.service';

@Component({
  selector: 'app-tool-input',
  templateUrl: './tool-input.component.html',
  styleUrls: ['./tool-input.component.scss'],
})
export class ToolInputComponent implements OnInit {
  @Output() evOnToolChange: EventEmitter<Tool> = new EventEmitter<Tool>();
  @ViewChild('toolNumber') toolNumber: IonInput;
  @Input() tool: Tool;
  public toolIsLoading = false;


  constructor(
    private toolService: ToolService,
  ) { }

  ngOnInit() { }


  toolOnChange(inputOTValue: string) {
    this.toolIsLoading = true;
    this.toolService.getToolByInput(inputOTValue)
      .then((responseTool: Tool) => {
        this.tool = responseTool;
        this.evOnToolChange.emit(this.tool);
        this.toolIsLoading = false;
      },
        () => {
          this.tool = null;
          this.toolNumber.value = '';
          this.toolIsLoading = false;
          this.evOnToolChange.emit(null);
        });
  }
}
