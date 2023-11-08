import { Icon, IconConsumer, icon } from '@/ui/components/icon';

export const RestoreIcon = icon(({ ...props }) => (
  <Icon size={18} viewBox="0 0 18 18" fill="none" {...props}>
    <IconConsumer>
      {({ fill = '#616D8D' } = { fill: '#616D8D' }) => (
        <path d="M10.2857 1C8.23976 1 6.2776 1.84285 4.83089 3.34315C3.38418 4.84344 2.57143 6.87827 2.57143 9H0L3.42857 12.5556L6.85714 9H4.28571C4.28571 7.34976 4.91786 5.76712 6.04307 4.60022C7.16829 3.43333 8.69442 2.77778 10.2857 2.77778C11.877 2.77778 13.4031 3.43333 14.5284 4.60022C15.6536 5.76712 16.2857 7.34976 16.2857 9C16.2857 10.6502 15.6536 12.2329 14.5284 13.3998C13.4031 14.5667 11.877 15.2222 10.2857 15.2222C9 15.2222 7.79143 14.7778 6.80571 14.0667L5.57143 15.3467C6.92707 16.4159 8.58252 16.9965 10.2857 17C12.3317 17 14.2938 16.1571 15.7405 14.6569C17.1872 13.1566 18 11.1217 18 9C18 6.87827 17.1872 4.84344 15.7405 3.34315C14.2938 1.84285 12.3317 1 10.2857 1ZM12 9C12 8.5285 11.8194 8.07632 11.4979 7.74292C11.1764 7.40952 10.7404 7.22222 10.2857 7.22222C9.83106 7.22222 9.39502 7.40952 9.07353 7.74292C8.75204 8.07632 8.57143 8.5285 8.57143 9C8.57143 9.4715 8.75204 9.92368 9.07353 10.2571C9.39502 10.5905 9.83106 10.7778 10.2857 10.7778C10.7404 10.7778 11.1764 10.5905 11.4979 10.2571C11.8194 9.92368 12 9.4715 12 9Z" fill={fill} />
      )}
    </IconConsumer>
  </Icon>
));