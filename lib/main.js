'use babel'

import {convertSelections} from './converter'

const atom = global.atom
let disposable = null

export function activate () {
  disposable = atom.commands.add('atom-text-editor', {
    'convert-date:convert': () => {
      convertSelections(atom.workspace.getActiveTextEditor())
    }
  })
}

export function deactivate () {
  if (disposable) {
    disposable.dispose()
  }
}
