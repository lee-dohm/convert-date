'use babel'

import moment from 'moment'

const atom = global.atom

export function convertDate (date) {
  let formattedDate = moment(date, ['MMMM DD, YYYY', 'DD MMMM YYYY']).format('YYYY-MM-DD')

  if (formattedDate === 'Invalid date') {
    throw new Error(`"${date}" is not a recognizable date`)
  }

  return formattedDate
}

export function convertSelections (editor) {
  editor.transact(function () {
    for (let selection of editor.getSelections()) {
      convertSelection(selection)
    }
  })
}

function convertSelection (selection) {
  try {
    selection.insertText(convertDate(selection.getText()))
  } catch (error) {
    atom.notifications.addWarning(error.message)
  }
}
