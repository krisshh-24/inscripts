
import 'react-data-grid/lib/styles.css';
import { DataGrid, type Column } from 'react-data-grid';
import {
  FileText,
  Calendar,
  CheckCircle,
  User,
  Link as LinkIcon,
  UserCheck,
  Flag,
  Clock,
  DollarSign,
  ChevronDown
} from 'lucide-react';


interface Row {
  id: number;
  jobRequest: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  value: string;
  blank: string;
}

const getStatusBadge = (status: string) => {
  const base = 'px-2 py-0.5 rounded-full text-xs font-semibold';
  switch (status) {
    case 'In-process':
      return <span className={`${base} bg-yellow-100 text-yellow-700`}>{status}</span>;
    case 'Need to start':
      return <span className={`${base} bg-blue-100 text-blue-700`}>{status}</span>;
    case 'Complete':
      return <span className={`${base} bg-green-100 text-green-700`}>{status}</span>;
    case 'Blocked':
      return <span className={`${base} bg-red-100 text-red-700`}>{status}</span>;
    default:
      return <span className={`${base} bg-gray-200 text-gray-700`}>{status}</span>;
  }
};

const getPriorityBadge = (priority: string) => {
  const base = 'px-2 py-0.5 rounded-full text-xs font-semibold';
  switch (priority) {
    case 'High':
      return <span className={`${base} bg-red-100 text-red-700`}>{priority}</span>;
    case 'Medium':
      return <span className={`${base} bg-yellow-100 text-yellow-700`}>{priority}</span>;
    case 'Low':
      return <span className={`${base} bg-blue-100 text-blue-700`}>{priority}</span>;
    default:
      return <span className={`${base} bg-gray-200 text-gray-700`}>{priority}</span>;
  }
};

const columns: Column<Row>[] = [
  { key: 'id', name: '#', width: 50, frozen: true, headerCellClass: 'bg-white', cellClass: 'bg-white' },
  {
    key: 'jobRequest',
    name: <div className="flex items-center gap-1 bg-gray-200"><FileText className="w-4 h-4 text-gray-500" />Job Request <ChevronDown className="w-4 h-4 text-gray-400 ml-1" /></div>,
    width: 200,
    headerCellClass: 'bg-gray-50 text-gray-400',
    cellClass: 'bg-gray-50'
  },
  {
    key: 'submitted',
    name: <div className="flex items-center gap-1 bg-gray-200"><Calendar className="w-4 h-4 text-gray-500" />Submitted <ChevronDown className="w-4 h-4 text-gray-400 ml-1" /></div>,
    width: 120,
    headerCellClass: 'bg-gray-50 text-gray-400',
    cellClass: 'bg-gray-50'
  },
  {
    key: 'status',
    name: <div className="flex items-center gap-1 bg-gray-200"><CheckCircle className="w-4 h-4 text-gray-500" />Status <ChevronDown className="w-4 h-4 text-gray-400 ml-1" /></div>,
    width: 130,
    renderCell: ({ row }) => getStatusBadge(row.status),
    cellClass: 'bg-gray-50 text-center',
    headerCellClass: 'bg-gray-50 text-gray-400'
  },
  {
    key: 'submitter',
    name: <div className="flex items-center gap-1 bg-gray-200"><User className="w-4 h-4 text-gray-500" />Submitter <ChevronDown className="w-4 h-4 text-gray-400 ml-1" /></div>,
    width: 150,
    headerCellClass: 'bg-gray-50 text-gray-400',
    cellClass: 'bg-yellow-50'
  },
  {
    key: 'url',
    name: <div className="flex items-center gap-1 bg-gray-200"><LinkIcon className="w-4 h-4 text-gray-500" />URL <ChevronDown className="w-4 h-4 text-gray-400 ml-1" /></div>,
    width: 200,
    renderCell: ({ row }) => row.url ? <a href={`https://${row.url}`} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{row.url}</a> : '',
    headerCellClass: 'bg-yellow-50 text-gray-400',
    cellClass: 'bg-yellow-50'
  },
  {
    key: 'assigned',
    name: <div className="flex items-center gap-1 bg-green-200"><UserCheck className="w-4 h-4 text-gray-500" />Assigned <ChevronDown className="w-4 h-4 text-gray-400 ml-1" /></div>,
    width: 150,
    headerCellClass: 'bg-green-50 text-green-700',
    cellClass: 'bg-green-50'
  },
  {
    key: 'priority',
    name: <div className="flex items-center gap-1 bg-purple-200"><Flag className="w-4 h-4 text-gray-500" />Priority <ChevronDown className="w-4 h-4 text-gray-400 ml-1" /></div>,
    width: 100,
    renderCell: ({ row }) => getPriorityBadge(row.priority),
    cellClass: 'bg-purple-50 text-center',
    headerCellClass: 'bg-purple-50 text-purple-700'
  },
  {
    key: 'dueDate',
    name: <div className="flex items-center gap-1 bg-purple-200"><Clock className="w-4 h-4 text-gray-500" />Due Date <ChevronDown className="w-4 h-4 text-gray-400 ml-1" /></div>,
    width: 120,
    headerCellClass: 'bg-purple-50 text-purple-700',
    cellClass: 'bg-purple-50'
  },
  {
    key: 'value',
    name: <div className="flex items-center gap-1 bg-red-200"><DollarSign className="w-4 h-4 text-gray-500" />Est. Value <ChevronDown className="w-4 h-4 text-gray-400 ml-1" /></div>,
    width: 120,
    headerCellClass: 'bg-red-50 text-red-700',
    cellClass: 'bg-red-50'
  },
  {
    key: 'blank',
    name: '',
    width: 120,
    cellClass: 'bg-white',
    headerCellClass: 'bg-white'
  }
];

const realRows: Row[] = [
  {
    id: 1,
    jobRequest: 'Launch social media campaign for pro...',
    submitted: '15-11-2024',
    status: 'In-process',
    submitter: 'Aisha Patel',
    url: 'www.aishapatel.com',
    assigned: 'Sophie Choudhury',
    priority: 'Medium',
    dueDate: '20-11-2024',
    value: '6,200,000',
    blank: ''
  },
  {
    id: 2,
    jobRequest: 'Update press kit for company redesign',
    submitted: '28-10-2024',
    status: 'Need to start',
    submitter: 'Irfan Khan',
    url: 'www.irfankhan.com',
    assigned: 'Tejas Pandey',
    priority: 'High',
    dueDate: '30-10-2024',
    value: '3,500,000',
    blank: ''
  },
  {
    id: 3,
    jobRequest: 'Finalize user testing feedback for app',
    submitted: '05-12-2024',
    status: 'In-process',
    submitter: 'Mark Johnson',
    url: 'www.markjohnson.com',
    assigned: 'Rachel Lee',
    priority: 'Medium',
    dueDate: '10-12-2024',
    value: '4,750,000',
    blank: ''
  },
  {
    id: 4,
    jobRequest: 'Design new features for the website',
    submitted: '10-01-2025',
    status: 'Complete',
    submitter: 'Emily Green',
    url: 'www.emilygreen.com',
    assigned: 'Tom Wright',
    priority: 'Low',
    dueDate: '15-01-2025',
    value: '5,900,000',
    blank: ''
  },
  {
    id: 5,
    jobRequest: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'Blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin Smith',
    priority: 'Low',
    dueDate: '30-01-2025',
    value: '2,800,000',
    blank: ''
  }
];

const ROW_HEIGHT = 35;
const HEADER_HEIGHT = 35;

export default function Table() {
  // Calculate how many rows fit in the window
  const availableHeight = typeof window !== 'undefined' ? window.innerHeight - HEADER_HEIGHT : 600;
  const rowsToFit = Math.max(0, Math.floor(availableHeight / ROW_HEIGHT) - realRows.length);

  // Add empty rows to fill the window
  const rows: Row[] = [
    ...realRows,
    ...Array.from({ length: rowsToFit }, (_, i) => ({
      id: realRows.length + 1 + i,
      jobRequest: '',
      submitted: '',
      status: '',
      submitter: '',
      url: '',
      assigned: '',
      priority: '',
      dueDate: '',
      value: '',
      blank: ''
    }))
  ];

  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={rows}
        className="rdg-light"
        style={{ height: `${rows.length * ROW_HEIGHT + HEADER_HEIGHT}px` }}
      />
    </div>
  );
}