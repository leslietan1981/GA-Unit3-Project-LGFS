main.jsx
└── App.jsx (Routes)
├── LandingPage path="/"
│ ├── AuthPanel
│ │ ├── TabToggle
│ │ ├── UsernameInput
│ │ ├── PasswordInput
│ │ └── SubmitButton
│ └── AppDescription
│
├── ProtectedRoute checks accessToken
│ ├── HomePage path="/home"
│ │ └── LeftPanel
│ │ ├── ProfileCard
│ │ │ ├── ProfilePicture
│ │ │ ├── GreetingText
│ │ │ ├── ActivityCount
│ │ │ ├── LatestActivity
│ │ │ └── ActivityIcon
│ │ └── StreakTracker
│ │
│ └── ProfilePage path="/profile"
│ ├── ProfilePicture
│ ├── DisplayNameField
│ ├── UsernameDisplay
│ └── ChangePasswordButton
│
└── AdminRoute checks accessToken + role
└── AdminDashboard path="/admin/\*"
├── AdminNavbar
│ ├── NavLink → /admin/users
│ └── NavLink → /admin/config
└── ManageUsersPage path="/admin/users"
└── UsersTable
└── UserRow[]
├── PromoteButton
├── RevokeButton
└── DeleteButton

logout button?

── Shared ──────────────────────────────────────────────────────
UserContext accessToken · role · username · login() · logout()
sharedFetch single gateway for all API calls → /api
localStorage accessToken persisted across page reloads
