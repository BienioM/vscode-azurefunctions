/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// tslint:disable-next-line:no-require-imports
import WebSiteManagementClient = require('azure-arm-website');
import * as vscode from 'vscode';
import { AzureExplorer, IAzureNode } from 'vscode-azureui';
import { FunctionAppTreeItem } from '../explorer/FunctionAppTreeItem';
import { IUserInterface } from '../IUserInterface';
import { localize } from '../localize';
import { nodeUtils } from '../utils/nodeUtils';
import * as workspaceUtil from '../utils/workspace';
import { VSCodeUI } from '../VSCodeUI';

export async function deploy(explorer: AzureExplorer, outputChannel: vscode.OutputChannel, context?: IAzureNode<FunctionAppTreeItem> | vscode.Uri, ui: IUserInterface = new VSCodeUI()): Promise<void> {
    const uri: vscode.Uri | undefined = context && context instanceof vscode.Uri ? context : undefined;
    let node: IAzureNode<FunctionAppTreeItem> | undefined = context && !(context instanceof vscode.Uri) ? context : undefined;

    const folderPath: string = uri ? uri.fsPath : await workspaceUtil.selectWorkspaceFolder(ui, localize('azFunc.selectZipDeployFolder', 'Select the folder to zip and deploy'));

    if (!node) {
        node = <IAzureNode<FunctionAppTreeItem>>await explorer.showNodePicker(FunctionAppTreeItem.contextValue);
    }

    const client: WebSiteManagementClient = nodeUtils.getWebSiteClient(node);

    await node.treeItem.siteWrapper.deployZip(folderPath, client, outputChannel);
}
