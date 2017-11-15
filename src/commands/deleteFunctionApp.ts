/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { AzureExplorer, IAzureParentNode } from 'vscode-azureui';
import { FunctionAppTreeItem } from '../explorer/FunctionAppTreeItem';

export async function deleteFunctionApp(explorer: AzureExplorer, node?: IAzureParentNode): Promise<void> {
    if (!node) {
        node = <IAzureParentNode>await explorer.showNodePicker(FunctionAppTreeItem.contextValue);
    }

    await node.deleteNode();
}
