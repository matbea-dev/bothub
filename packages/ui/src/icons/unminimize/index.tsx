import { Icon, IconConsumer, icon } from '@/ui/components/icon';

export const UnminimizeIcon = icon(({ ...props }) => (
  <Icon size={24} viewBox="0 0 24 24" fill="none" {...props}>
    <IconConsumer>
      {({ fill = '#616D8D' } = { fill: '#616D8D' }) => (
        <path d="M19.5 2C20.163 2 20.7989 2.26339 21.2678 2.73223C21.7366 3.20107 22 3.83696 22 4.5V19.5C22 20.163 21.7366 20.7989 21.2678 21.2678C20.7989 21.7366 20.163 22 19.5 22H4.5C3.83696 22 3.20107 21.7366 2.73223 21.2678C2.26339 20.7989 2 20.163 2 19.5V4.5C2 3.83696 2.26339 3.20107 2.73223 2.73223C3.20107 2.26339 3.83696 2 4.5 2H19.5ZM18 4H14C13.4696 4 12.9609 4.21071 12.5858 4.58579C12.2107 4.96086 12 5.46957 12 6V18C12 18.5304 12.2107 19.0391 12.5858 19.4142C12.9609 19.7893 13.4696 20 14 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4ZM9.121 9.707C8.94321 9.52879 8.70475 9.42419 8.45322 9.41408C8.20169 9.40397 7.9556 9.48909 7.76408 9.65246C7.57256 9.81582 7.4497 10.0454 7.42003 10.2954C7.39035 10.5454 7.45605 10.7973 7.604 11.001L5 11C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13L7.828 12.999L7.707 13.121C7.52484 13.3096 7.42405 13.5622 7.42633 13.8244C7.4286 14.0866 7.53377 14.3374 7.71918 14.5228C7.90459 14.7082 8.1554 14.8134 8.4176 14.8157C8.6798 14.818 8.9324 14.7172 9.121 14.535L10.535 13.121C10.806 12.85 10.889 12.462 10.785 12.119C10.8377 11.9456 10.8422 11.7612 10.7982 11.5854C10.7542 11.4096 10.6632 11.2491 10.535 11.121L9.121 9.707Z" fill={fill} />
      )}
    </IconConsumer>
  </Icon>
));