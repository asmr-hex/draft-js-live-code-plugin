import { List } from 'immutable'


// https://github.com/facebook/draft-js/blob/master/src/model/decorators/DraftDecoratorType.js
export class Decorator implements Draft.DraftDecoratorType {
    constructor() {

    }


    public getDecorations(block: Draft.ContentBlock, contentState: Draft.ContentState): Immutable.List<string> {
        const blockKeys = contentState.getBlocksAsArray().map((b: Draft.ContentBlock) => b.getKey())
        const blockKey = block.getKey()
        const blockText = block.getText()
        const blockIndex = blockKeys.indexOf(blockKey)
        let decorations: Array<string | null> = Array(blockText.length).fill(null)

        // handle autosuggestion entities
        const { suggestions, text } = this.extractSuggestions(block, contentState)

        // initialize map for this block type for use later (in getPropsforkey)
        this.tokens[blockKey] = {}

        // interpret text in this block.
        // TODO standardize output....include metadata output (something to control like line style??)
        let { tokens = [] } = this.interpret(blockKey, blockIndex, text)

        //if ( tokens.length === 0 ) tokens = this.getDefaultTokens() // TODO taking this out prevented the bug that would ignore highlighting the first suggestion when the text box was empty. idk if we still need this though...

        for (const token of [...suggestions, ...tokens]) {
            const tokenId = `${token.start}`             // block-relative token id
            const componentKey = `${blockKey}-${token.start}` // block-scoped token id

            // set instance key on token
            token.key = componentKey

            // store information about this token in map (for use in getPropsforKey)
            this.tokens[blockKey][tokenId] = token

            // set the component key for all char indices
            for (let i = token.start; i < token.start + token.length; i++) {
                decorations[i] = componentKey
            }
        }

        return List([])
    }

    public getComponentForKey(key: string): Function {
        return () => { }
    }

    public getPropsForKey(key: string): any {
        return null
    }

    public updateInlineSuggestion(editorState: Draft.EditorState): Draft.EditorState {
        return editorState
    }

    // TODO implement, TYPE
    private extractSuggestions(block: ContentBlock, contentState: Draft.ContentState): null {

    }
}
