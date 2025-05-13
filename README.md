### Astrodome





Astrodome is a comprehensive platform connecting Web3 builders, developers, and creators with opportunities, resources, and community. The platform enables users to showcase their skills, find relevant projects, access learning materials, and participate in events like hackathons.

## 🚀 Features

### For Builders & Developers

- **Profile & Portfolio**: Create a public profile showcasing your skills, experience, and past work
- **Opportunity Marketplace**: Find bounties, gigs, and full-time roles filtered by skills and experience level
- **Skill Matching**: Apply for projects that match your expertise and interests
- **Earnings & Payments**: Receive payments in stablecoins with transparent payment timelines


### For Learners

- **Learning Resources**: Access curated educational content for Web3 development
- **Mentorship**: Connect with experienced developers who can guide your journey
- **Learning Paths**: Follow structured courses to master Web3 development
- **Micro-rewards**: Earn while you learn through educational tasks and quizzes


### For Community

- **Events & Hackathons**: Participate in virtual and in-person events
- **Team Formation**: Find teammates for hackathons and projects
- **Networking**: Connect with others in your niche through interest-based channels
- **Success Stories**: Learn from builders who found success through the platform


### For Sponsors & Partners

- **Opportunity Promotion**: Publish bounties aligned with product roadmaps
- **Developer Enablement**: Showcase documentation and SDKs in a resource hub
- **ROI Tracking**: Track engagement metrics for sponsored opportunities
- **Talent Discovery**: Identify top-performing contributors for potential recruitment


## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: Lucide React
- **Authentication**: (To be implemented)
- **Database**: (To be implemented)


## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn


## 🔧 Installation

1. Clone the repository:

```shellscript
git clone https://github.com/yourusername/astrodome.git
cd astrodome
```


2. Install dependencies:

```shellscript
npm install
# or
yarn install
```


3. Run the development server:

```shellscript
npm run dev
# or
yarn dev
```


4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


## 📁 Project Structure

```plaintext
astrodome/
├── app/                  # Next.js App Router
│   ├── page.tsx          # Homepage
│   ├── profile/          # Profile pages
│   ├── marketplace/      # Opportunity marketplace
│   ├── learn/            # Learning resources
│   ├── events/           # Events and hackathons
│   └── layout.tsx        # Root layout
├── components/           # Reusable components
│   ├── ui/               # UI components (shadcn/ui)
│   └── theme-provider.tsx # Theme provider
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── ...                   # Configuration files
```

## 🖥️ Pages

- **Homepage**: Overview of the platform with featured opportunities and events
- **Profile**: User profiles with skills, portfolio, experience, and reviews
- **Marketplace**: Filterable list of bounties, gigs, and jobs
- **Learn**: Educational resources, courses, and mentorship opportunities
- **Events**: Hackathons, meetups, and other community events


## 🔜 Roadmap

- User authentication and registration
- Database integration for storing user profiles and opportunities
- Payment system integration
- Team formation functionality
- Event registration and management
- Mobile application
- API for third-party integrations
