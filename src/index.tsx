import { EditorPlugin, PluginFunctions } from '@draft-js-plugins/editor'

import { Decorator } from './decorator'

/**
 * Creates a Live Code DraftJS Plugin.
 */
export const createLiveCodePlugin = ({ }): EditorPlugin => {
    // instantiate a new live code decorator
    const decorator = new Decorator()

    return {
        onChange: (newEditorState: Draft.EditorState, pluginFunctions: PluginFunctions) => {
            if (decorator === null) return newEditorState

            // on change, we potentially insert/update/remove an inline suggested completion.
            return decorator.updateInlineSuggestion(newEditorState)
        },
        decorators: [decorator]
    }
}
