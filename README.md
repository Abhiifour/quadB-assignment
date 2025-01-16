# Advanced Todo Application

A feature-rich Todo application built with React, Redux, and modern web technologies. This application includes user authentication, task management with priorities and responsive design.

visit : https://quad-b-assignment-phi.vercel.app/
![ezgif-6-cbbeac58af](https://github.com/user-attachments/assets/ef48cd07-f719-4b48-80ad-7e10a10c6560)







## 🚀 Features

- **User Authentication**
  - Login functionality
  - Protected Todos for authenticated users
  - Redux-managed authentication state

- **Task Management**
  - Create, read, and delete tasks
  - Priority levels (High, Medium, Low)
  - Persistent storage 

- **Responsive Design**
  - Mobile-first approach
  - TailwindCSS implementation
  - Consistent experience across devices

## 🛠️ Technology Stack

- **Frontend Framework:** React
- **State Management:** Redux + Redux Toolkit
- **Styling:** Tailwind CSS
- **Storage:** Local Storage
- **Type Safety:** TypeScript

## 📦 Project Structure

```
src/
├── components/
│   ├── TaskDetails.tsx
│   ├──  TaskList.tsx
├── pages/
│   ├── Home.tsx
│   ├──  LandingPage.tsx
├── store/
│   ├── editSlice.ts
│   ├── menuSlice.ts
│   ├── taskSlice.ts
│   ├── userSlice.ts
│   ├── store.ts
│   └── viewSlice.ts
└── App.tsx
```

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Abhiifour/quadB-assignment.git
   cd quadB-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```



3. **Start the development server**
   ```bash
   npm run dev
   ```

## 💻 Available Scripts

- `npm run dev` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Run linting
- `npm run format` - Format code with Prettier

## 🔑 Authentication

The application uses a simulated authentication process with Redux:

```typescript
// Example login action
function Auth(){
    if(mode === "login"){
// Login Credentials - email and password .
      dispatch(loginUser({
        email:email,  
        password:password
       
      }))
    }
    else{
// Signup Credentials - username , email and password .
      dispatch(updateUserState({
        name:username,
        email,
        password
      }))
    }
  }
```

## 📱 Responsive Design

The application follows a mobile-first approach using Tailwind CSS breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px


`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Authors

- Abhishek Singh - [GitHub Profile](https://github.com/Abhiifour)
