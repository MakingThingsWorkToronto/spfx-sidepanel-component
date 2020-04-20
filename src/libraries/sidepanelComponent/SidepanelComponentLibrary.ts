import { IExtensibilityLibrary } from "../../models/IExtensibilityLibrary";
import { SidePanelComponentWebComponent } from "../../components/SidePanelComponent/SidePanelComponent";
import { IComponentDefinition } from "../../models/IComponentDefinition";


export class SidepanelComponentLibrary {
  
  public name(): string {
    return 'SidepanelComponentLibrary';
  }

  public getCustomWebComponents(): IComponentDefinition<any>[] {
    return [
    {
        componentName: 'pnp-sidepanel-component',
        componentClass: SidePanelComponentWebComponent
    }
    ];
  }

}
