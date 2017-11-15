/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// tslint:disable-next-line:no-require-imports
import WebSiteManagementClient = require('azure-arm-website');
import { AzureExplorer, IAzureNode } from 'vscode-azureui';
import { FunctionAppTreeItem } from '../explorer/FunctionAppTreeItem';
import { nodeUtils } from '../utils/nodeUtils';

export async function stopFunctionApp(explorer: AzureExplorer, node?: IAzureNode<FunctionAppTreeItem>): Promise<void> {
    if (!node) {
        node = <IAzureNode<FunctionAppTreeItem>>await explorer.showNodePicker(FunctionAppTreeItem.contextValue);
    }

    const client: WebSiteManagementClient = nodeUtils.getWebSiteClient(node);
    await node.treeItem.siteWrapper.stop(client);
    explorer.refresh(node.parent);
}
