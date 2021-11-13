import React from "react";
import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generateCalendar from 'antd/es/appointments/generateCalendar';
import 'antd/es/appointments/style';

const Appointments = generateCalendar<Dayjs>(dayjsGenerateConfig);

export default Appointments;