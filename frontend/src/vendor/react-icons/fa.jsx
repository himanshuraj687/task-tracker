import React from 'react';

const createIcon = (path, viewBox = '0 0 24 24') => {
  const Icon = ({ className = '', ...props }) => (
    <svg viewBox={viewBox} fill="currentColor" aria-hidden="true" focusable="false" className={className} {...props}>
      {path}
    </svg>
  );

  return Icon;
};

export const FaCheckCircle = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M10.1 13.8 7.9 11.6 6.5 13l3.6 3.6 7.4-7.4-1.4-1.4z" fill="#fff" />
  </>,
);

export const FaTasks = createIcon(
  <>
    <rect x="5" y="5" width="14" height="14" rx="2" />
    <path d="M8 9h8v1.5H8zM8 12.5h8V14H8zM8 16h5v1.5H8z" fill="#fff" />
  </>,
);

export const FaClock = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M11.25 6.5h1.5v6.05l4.5 2.7-.77 1.28-5.23-3.15z" fill="#fff" />
  </>,
);

export const FaSpinner = createIcon(
  <>
    <path d="M12 2a10 10 0 1 0 7.07 2.93l-1.06 1.06A8.5 8.5 0 1 1 12 3.5V2z" />
  </>,
);

export const FaCheckDouble = createIcon(
  <>
    <path d="m5.5 12.2 1.4-1.4 3 3 6-6 1.4 1.4-7.4 7.4z" />
    <path d="m9.3 12.2 1.4-1.4 3 3 6-6 1.4 1.4-7.4 7.4z" opacity="0.45" />
  </>,
);

export const FaEdit = createIcon(
  <path d="M4 17.25V20h2.75L17.8 8.95l-2.75-2.75zM19.71 7.04a1 1 0 0 0 0-1.42l-1.33-1.33a1 1 0 0 0-1.42 0l-1.1 1.1 2.75 2.75z" />
);

export const FaTrashAlt = createIcon(
  <path d="M9 3.5h6l.75 1.5H19v1.5H5.25V5h3.25zM6.5 8h11l-.8 12h-9.4z" />
);

export const FaCalendarAlt = createIcon(
  <>
    <rect x="4" y="5" width="16" height="15" rx="2" />
    <rect x="7" y="2.5" width="1.5" height="4" fill="#fff" />
    <rect x="15.5" y="2.5" width="1.5" height="4" fill="#fff" />
    <rect x="6.5" y="9" width="11" height="1.5" fill="#fff" />
  </>,
);

export const FaCheck = createIcon(
  <path d="m9.4 16.2-3.6-3.6 1.4-1.4 2.2 2.2 7-7 1.4 1.4z" />
);

export const FaExclamationCircle = createIcon(
  <>
    <circle cx="12" cy="12" r="10" />
    <rect x="11.25" y="6.5" width="1.5" height="7" fill="#fff" />
    <rect x="11.25" y="15.5" width="1.5" height="1.5" fill="#fff" />
  </>,
);

export const FaPlus = createIcon(
  <path d="M11.25 5h1.5v14h-1.5zM5 11.25h14v1.5H5z" />
);

export const FaSave = createIcon(
  <>
    <path d="M5 4h11l3 3v13H5z" />
    <rect x="7" y="5.5" width="7" height="4" fill="#fff" />
    <rect x="8" y="13" width="8" height="4" rx="1" fill="#fff" />
  </>,
);

export const FaTimes = createIcon(
  <path d="m6.8 5.4-1.4 1.4L10.6 12l-5.2 5.2 1.4 1.4L12 13.4l5.2 5.2 1.4-1.4-5.2-5.2 5.2-5.2-1.4-1.4-5.2 5.2z" />
);

export const FaInbox = createIcon(
  <>
    <path d="M4 5.5h16l-1.7 9H13l-1 2h-2l-1-2H5.7z" />
    <path d="M5.7 14.5h3.6l1 2h3.4l1-2h3.6" fill="#fff" />
  </>,
);

export const FaSearch = createIcon(
  <>
    <circle cx="10.5" cy="10.5" r="5.5" />
    <rect x="14.8" y="14.8" width="6" height="1.8" rx="0.9" transform="rotate(45 14.8 14.8)" fill="#fff" />
  </>,
);

export const FaFilter = createIcon(
  <path d="M4 5h16l-6.5 7v5.5l-3 1.5V12z" />
);

export const FaSortAmountDown = createIcon(
  <>
    <path d="M5 5h2v10H5zM5 17h2v2H5zM9 14l3-3 3 3H9zM15 6h4v2h-4zM15 10h3v2h-3zM15 14h2v2h-2z" />
  </>,
);