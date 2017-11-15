/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { AzureExplorer, IAzureNode } from 'vscode-azureui';
import { FunctionAppTreeItem } from '../explorer/FunctionAppTreeItem';
import { startFunctionApp } from './startFunctionApp';
import { stopFunctionApp } from './stopFunctionApp';

export async function restartFunctionApp(explorer: AzureExplorer, node?: IAzureNode<FunctionAppTreeItem>): Promise<void> {
    await stopFunctionApp(explorer, node);
    await startFunctionApp(explorer, node);
}
