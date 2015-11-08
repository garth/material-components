import GettingStarted from './gettingStarted';
import Introduction from './introduction';
import Paper from './paper';
import Typography from './typography';
import Appbar from './appbar';
import Sidenav from './sidenav';
import Form from './form';
import Button from './button';
import Input from './input';
import Select from './select';
import Checkbox from './checkbox';
import GridSystem from './gridSystem';
import Menu from './menu';
import Dialog from './dialog';
import DatePicker from './datePicker';
import Table from './table';
import Spinner from './spinner';
import Calendar from './calendar';
import ResponsiveEvents from './responsiveEvents';
import NotFound from './notFound';

export default function (page) {
  switch (page) {
    case 'introduction':
      return Introduction;
    case 'gettingStarted':
      return GettingStarted;
    case 'paper':
      return Paper;
    case 'typography':
      return Typography;
    case 'appbar':
      return Appbar;
    case 'sidenav':
      return Sidenav;
    case 'form':
      return Form;
    case 'button':
      return Button;
    case 'input':
      return Input;
    case 'select':
      return Select;
    case 'checkbox':
      return Checkbox;
    case 'gridSystem':
      return GridSystem;
    case 'menu':
      return Menu;
    case 'dialog':
      return Dialog;
    case 'datePicker':
      return DatePicker;
    case 'table':
      return Table;
    case 'spinner':
      return Spinner;
    case 'calendar':
      return Calendar;
    case 'responsiveEvents':
      return ResponsiveEvents;
    default:
      return NotFound;
  }
}
