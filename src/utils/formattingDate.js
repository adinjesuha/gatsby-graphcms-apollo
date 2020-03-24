import * as moment from "moment"
import "moment/locale/es-us"

moment.locale("es-us")

export const formattingDate = date => moment(date).format("MMMM, D")
