<h1>University Website Documentation</h1>
<p>This website is designed to serve as a comprehensive online platform for university, facilitating the dissemination of information about various departments, student societies, and offering a dedicated portal for student management.</p>

<h2>Project Overview</h2>

<p>This University Website comprises four main sections:</p>
<ul>
    <li>Home Page:
        <ol>
            <li>This page serves as the landing page for the website.</li>
            <li>It contains essential information about the university and its departments.</li>
        </ol>
    </li>
    <li>Departments Page:
        <ol>
            <li>The Departments Page provides detailed insights into each department within the university.</li>
            <li>Users can explore information specific to individual departments.</li>
        </ol>
    </li>
    <li>Student Societies Page:
        <ol>
            <li>The Student Societies Page showcases the diverse range of co-curricular activities available to students.</li>
            <li>It includes a registration form enabling students to join their preferred societies.</li>
        </ol>
    </li>
    <li>Student Portal:
        <ol>
            <li>The Student Portal offers a login system for students.</li>
            <li>Students can access personal information added by the administration, providing a centralized hub for student management.</li>
        </ol>
    </li>
</ul>

<h2>Usage Instructions</h2>
<h3>Accessing Pages</h3>
<ul>
    <p>Navigate to the respective URLs to access different sections of the website:</p>
    <li>Home Page: You can access homepage by navigating through navbar or using the url: http://localhost:5173/</li>
    <li>Departments Page: You can access department by navigating through navbar</li>
    <li>Student Societies Page: You can access department by navigating through navbar or using url: http://localhost:5173/student-societies</li>
    <li>Student Portal: You can access student portal by navigating through navbar or using url: http://localhost:5173/student-portal</li>
</ul>

<h3>Student Societies Registration</h3>
<p>On the Student Societies Page, students can register for their favorite societies using the provided registration form.</p>

<h3>Student Portal Login</h3>
<ul>
    <li>Access the Student Portal to log in using your email and password.</li> 
    <li>Once logged in, students can view their personal information as managed by the administration.</li>   
</ul>

<h3>Admin Panel</h3>
<ul>
    <li>New administrators can sign up for admin privileges by visiting: http://localhost:3000/api/v1/auth/sign-up</li>
    <li>Existing administrators can log in via: http://localhost:3000/api/v1/auth/admin-login</li>
</ul>

<h2>Development Instructions</h2>
<p>If you wish to contribute to the development of this project, follow these steps:</p>
<ul>
    <li>Clone the repository to your local machine:</li>
    <b>git clone https://github.com/hannan8474/LMS_Project.git</b>
    <li>Install Project Dependencies</li>
    <p><b>cd lmsProject</b></p>
    <p><b>npm install</b></p>
    <li>Make necessary changes or enhancements to the project.</li>
    <li>Test your modifications locally:</li>
    <b>npm start</b>
    <li>Once satisfied, push your changes to the repository:</li>
    <b>git push origin main</b>
</ul>