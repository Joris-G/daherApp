import { Pipe } from "@angular/core";
import { Tool } from "src/app/features/tooling/models/tool.model";

@Pipe({
  name: 'toolLabel',
  standalone: true
})
export class ToolLabelPipe {
  transform(tool: Tool | null): string {
    if (!tool) return '';
    return tool.sapToolNumber.length > 5 ? 'OT' : 'OT0';
  }
}