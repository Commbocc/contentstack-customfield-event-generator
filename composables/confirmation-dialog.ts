export const confirmationDialog = reactive({
  open: false,
  text: 'Are You Sure?',
  callback: () => {},
})

export const useConfirmationDialog = (
  cb: () => void,
  text: string = 'Are you sure?'
) => {
  confirmationDialog.open = true
  confirmationDialog.text = text
  confirmationDialog.callback = () => {
    if (confirmationDialog.open !== true) return
    cb()
    confirmationDialog.open = false
  }
}
