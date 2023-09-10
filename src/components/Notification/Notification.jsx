import { NotificationH } from './Notification.styled';

export function Notification({ message, option }) {
  return <NotificationH $total={option}>{message}</NotificationH>;
}
