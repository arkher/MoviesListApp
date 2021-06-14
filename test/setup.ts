import "react-native"

// bibliotecas para mock
import "./mock-react-native-image"
import "./mock-async-storage"
import "./mock-i18n"
import "./mock-reactotron"

jest.useFakeTimers()
declare global {
  let __TEST__
}
