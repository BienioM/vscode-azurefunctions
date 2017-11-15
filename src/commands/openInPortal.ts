/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { AzureExplorer, IAzureNode } from 'vscode-azureui';
import { FunctionAppTreeItem } from '../explorer/FunctionAppTreeItem';

export async function openInPortal(explorer: AzureExplorer, node?: IAzureNode<FunctionAppTreeItem>): Promise<void> {
    if (!node) {
        node = <IAzureNode<FunctionAppTreeItem>>await explorer.showNodePicker(FunctionAppTreeItem.contextValue);
    }

    node.openInPortal();
}
