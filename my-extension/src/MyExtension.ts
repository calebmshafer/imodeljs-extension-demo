import { Extension, IModelApp } from "@bentley/imodeljs-frontend";
import { I18N } from "@bentley/imodeljs-i18n";
import { LineTool, MarkupApp, SelectTool } from "@bentley/imodeljs-markup";
import { CommonToolbarItem, ToolbarItemUtilities, UiItemsManager, UiItemsProvider } from "@bentley/ui-abstract";
import { StageUsage, ToolbarUsage, ToolbarOrientation } from "@bentley/ui-abstract";

export class MyUiItemsProvider implements UiItemsProvider {
    public readonly id = "MyItemsProvider";
    public static i18n: I18N;

    public constructor(i18n: I18N) {
        MyUiItemsProvider.i18n = i18n;
    }

    public provideToolbarButtonItems(_stageId: string, stageUsage: string, toolbarUsage: ToolbarUsage, toolbarOrientation: ToolbarOrientation): CommonToolbarItem[] {
        if (stageUsage !== StageUsage.General || toolbarUsage !== ToolbarUsage.ContentManipulation || toolbarOrientation !== ToolbarOrientation.Vertical)
            return [];

        return [
            ToolbarItemUtilities.createActionButton(
                "myextension-markup-select",
                200,
                "icon-cursor",
                SelectTool.flyover,
                () => { IModelApp.tools.run(SelectTool.toolId); },
            ),
            ToolbarItemUtilities.createActionButton(
                "myextension-markup-line",
                201,
                LineTool.iconSpec,
                LineTool.flyover,
                () => { IModelApp.tools.run(LineTool.toolId); },
            ),
        ]
    }
}

export class MyExtension extends Extension {
    // Override the _defaultNs to setup a namespace.
    protected _defaultNs = "sample";
  
    /** Invoked the first time this extension is loaded. */
    public async onLoad(): Promise<void> {
      // Wait for the localization to be loaded
      await this.i18n.getNamespace(this._defaultNs)!.readFinished;

      // Need to initialize Markup before registering the tools.
      await MarkupApp.initialize();

      UiItemsManager.register(new MyUiItemsProvider(this.i18n));
  
      // Add your initialization code here
      // alert(this.i18n.translate(`${this._defaultNs}:Hello`));
    }
  
    /** Invoked each time this extension is loaded. */
    public async onExecute(): Promise<void> {
      alert(this.i18n.translate(`${this._defaultNs}:HelloAgain`));
    }
  }

IModelApp.extensionAdmin.register(new MyExtension("sample"));
