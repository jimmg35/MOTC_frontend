import TimeSlider from '@arcgis/core/widgets/TimeSlider'
import TimeInterval from '@arcgis/core/TimeInterval'

const timeSlider = new TimeSlider({
  timeVisible: true,
  loop: true,
  mode: 'time-window',
  layout: 'compact',
  stops: {
    interval: new TimeInterval({
      value: 3,
      unit: 'minutes'
    })
  }
})

export default timeSlider
