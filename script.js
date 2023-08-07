// function initClient() {
//     // Initialize the client with your API key
//     gapi.client.init({
//       apiKey: apiKey
//     }).then(function() {
//       console.log('Google Sheets API initialized');
//     }, function(error) {
//       console.error('Error initializing Google Sheets API:', error);
//     });
//   }


    // Add event listener to the search input field
    document.getElementById('searchInput').addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
          searchStudent();
        }
    });
      
//     // Initialize the client with your API key
//     function initClient() {
//         gapi.client.init({
//           apiKey: apiKey
//         }).then(function() {
//             console.log('Google Sheets API initialized');
//             // Call the searchStudent function here
//             searchStudent();
//           }, function(error) {
//             console.error('Error initializing Google Sheets API:', error);
//           });
//         }
//       // Load the Google Sheets API
// gapi.load('client', initClient);
      
// Function to search for a student by seating number or name
// function searchStudent() {
//     const searchInput = document.getElementById('searchInput').value.trim();
//     const searchResult = document.getElementById('searchResult');
//     searchResult.innerHTML = '';
  
    
  
//     gapi.client.sheets.spreadsheets.values.get({
//         spreadsheetId: spreadsheetId,
//         range: range,
//       }).then(function(response) {
//         const data = response.result.values;
//         const matchedStudents = data.filter(row => row[0].includes(searchInput));

//         if (matchedStudents.length > 0) {
//           const table = document.createElement('table');
//           table.classList.add('table', 'table-bordered', 'text-center');
//           const tableHeader = table.createTHead();
//           const tableBody = table.createTBody();

//           // Create table header row
//           const headerRow = tableHeader.insertRow();
//           const headers = {
//             0: "اسم الطالب باللغة العربية",
//             1: "الدرجة",
//             2: "كود الحالة",
//             3: "الحالة",
//             4: "التعيين"
//           };

//           for (const key in headers) {
//             const th = document.createElement('th');
//             th.scope = 'col';
//             th.innerText = headers[key];
//             th.classList.add('align-middle');
//             headerRow.appendChild(th);
//           }

//           // Create table data rows for matched students
//           for (const studentData of matchedStudents) {
//             const dataRow = tableBody.insertRow();
//             for (let i = 0; i < studentData.length; i++) {
//               const td = document.createElement('td');
//               if (i === 1) {
//                 const totalDegree = parseFloat(studentData[i]);
//                 td.innerText = totalDegree.toFixed(2);
//               } else {
//                 td.innerText = studentData[i];
//               }
//               td.classList.add('align-middle');
//               dataRow.appendChild(td);
//             }
//           }

//           // Append the table to the searchResult div
//           searchResult.appendChild(table);
//         } else {
//           searchResult.innerHTML = '<p class="text-danger">No matching students found.</p>';
//         }
//       }, function(error) {
//         console.error('Error fetching data from Google Sheets:', error);
//       });
//     }


// const data = {
//     "seating_no": ["arabic_name", "total_degree", "student_case", "student_case_desc", "c_flage"],
//     "1000500": ["أحمد السيد عبدالمالك المديني الشيخ", 636.25, 1, "ناجح دور أول", 3],
// };




















// const totalDegreeMax = 410; // Maximum total_degree score

// // Function to calculate the percentage and round to two decimal places
// function calculatePercentage(score) {
//   return ((score / totalDegreeMax) * 100).toFixed(2);
// }
//     // Function to trigger when data.js has finished loading
//     function onDataLoaded() {
//       console.log("Data is loaded");
//       // Call the searchStudent function when data.js is loaded
//       searchStudent();
//     }
// // Function to search for a student by seating number or name
// function searchStudent() {
//   const searchInput = document.getElementById('searchInput').value.trim(); // Trim any leading/trailing spaces
//   const searchResult = document.getElementById('searchResult');
//   searchResult.innerHTML = '';

//   document.getElementById('searchInput').addEventListener('keyup', function (event) {
//     if (event.key === 'Enter') {
//       searchStudent(); // Call the search function when the "Enter" key is pressed
//     }
//   });
    
//   const matchedStudents = [];
  
//   // Check if the entered value exists in the data dictionary as a seating number
//   if (data.hasOwnProperty(searchInput)) {
//     matchedStudents.push(data[searchInput]);
//   }

//   // Check if the entered value is a substring of any student's name
//   for (const seatingNo in data) {
//     if (data.hasOwnProperty(seatingNo) && data[seatingNo][0].includes(searchInput)) {
//       matchedStudents.push(data[seatingNo]);
//     }
//   }

//   if (matchedStudents.length > 0) {
//     const table = document.createElement('table');
//     table.classList.add('table', 'table-bordered', 'text-center'); // Add 'text-center' class to center the table
//     const tableHeader = table.createTHead();
//     const tableBody = table.createTBody();

//     // Create table header row
//     const headerRow = tableHeader.insertRow();
//     const headers = {
//       "arabic_name": "اسم الطالب باللغة العربية",
//       "total_degree": "الدرجة",
//       "student_case": "كود الحالة",
//       "student_case_desc": "الحالة",
//       "c_flage": "التعيين"
//     };

//     for (const key of data['seating_no']) {
//       const th = document.createElement('th');
//       th.scope = 'col';
//       th.innerText = headers[key];
//       th.classList.add('align-middle'); // Add 'align-middle' class to vertically center the text in header cells
//       headerRow.appendChild(th);
//     }

//     // Add Percentage column header
//     const thPercentage = document.createElement('th');
//     thPercentage.scope = 'col';
//     thPercentage.innerText = "النسبة المئوية";
//     thPercentage.classList.add('align-middle'); // Add 'align-middle' class to vertically center the text in header cell
//     headerRow.appendChild(thPercentage);

//     // Create table data rows for matched students
//     for (const studentData of matchedStudents) {
//       const dataRow = tableBody.insertRow();
//       for (let i = 0; i < studentData.length; i++) {
//         const td = document.createElement('td');
//         if (i === 1) { // For total_degree column, round the value to two decimal places
//           const totalDegree = parseFloat(studentData[i]);
//           td.innerText = totalDegree.toFixed(2);
//         } else {
//           td.innerText = studentData[i];
//         }
//         td.classList.add('align-middle'); // Add 'align-middle' class to vertically center the text in data cells
//         dataRow.appendChild(td);
//       }

//       // Calculate and add the percentage column data
//       const totalDegree = parseFloat(studentData[1]);
//       const percentage = calculatePercentage(totalDegree);
//       const tdPercentage = document.createElement('td');
//       tdPercentage.innerText = `${percentage}%`;
//       tdPercentage.classList.add('align-middle'); // Add 'align-middle' class to vertically center the text in data cell
//       dataRow.appendChild(tdPercentage);
//     }

//     // Append the table to the searchResult div
//     searchResult.appendChild(table);
//   } else {
//     // If no matching students found
//     searchResult.innerHTML = '<p class="text-danger">No matching students found.</p>';
//   }
// }


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDW36o6c6gu7_A6Equ_gjReY2tzcoaIjhM",
    authDomain: "nateega.firebaseapp.com",
    projectId: "nateega",
    storageBucket: "nateega.appspot.com",
    messagingSenderId: "169037539454",
    appId: "1:169037539454:web:caf368f6a415d7c9bdd02f",
    measurementId: "G-1FHLRVCSXC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  // Get a reference to the Firestore database
  const db = firebase.firestore();

// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: 'AIzaSyDW36o6c6gu7_A6Equ_gjReY2tzcoaIjhM',
//   authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
//   projectId: 'nateega',
//   storageBucket: 'YOUR_PROJECT_ID.appspot.com',
//   messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
//   appId: 'YOUR_APP_ID',
// };

firebase.initializeApp(firebaseConfig);



function checkDatabaseConnection() {
  // Get a reference to a collection or document in your Firestore database
  // For example, we'll use a reference to a collection named "testCollection"
  const collectionRef = db.collection('testCollection');

  // Use the get method to try to retrieve data from the collection
  collectionRef.get()
    .then((querySnapshot) => {
      // If the promise resolves without any error, the connection is successful
      console.log('Database connection successful!');
    })
    .catch((error) => {
      // If there is an error, the connection failed
      console.error('Database connection failed:', error);
    });
}


// Call the checkDatabaseConnection function when the page loads
document.addEventListener('DOMContentLoaded', checkDatabaseConnection);

// Or, call it when a specific event occurs, such as a button click
document.getElementById('checkConnectionButton').addEventListener('click', checkDatabaseConnection);





// Function to save the data to Firestore
function saveDataToFirestore(data) {
  // Assuming 'data' is an array of objects with each object representing a student
  data.forEach((studentData, seatingNo) => {
    db.collection('students').doc(seatingNo.toString()).set({
      arabic_name: studentData[0],
      total_degree: studentData[1],
      student_case: studentData[2],
      student_case_desc: studentData[3],
      c_flage: studentData[4],
    })
    .then(() => {
      console.log('Data saved to Firestore!');
    })
    .catch((error) => {
      console.error('Error saving data to Firestore:', error);
    });
  });
}


// Function to retrieve the data from Firestore
function retrieveDataFromFirestore(searchInput) {
  db.collection('students').where('arabic_name', '>=', searchInput).get()
  .then((querySnapshot) => {
    const matchedStudents = [];
    querySnapshot.forEach((doc) => {
      matchedStudents.push(doc.data());
    });

    // Use the matchedStudents array as needed
    console.log('Matched students:', matchedStudents);
  })
  .catch((error) => {
    console.error('Error retrieving data from Firestore:', error);
  });
}





const totalDegreeMax = 410; // Maximum total_degree score

// Function to calculate the percentage and round to two decimal places
function calculatePercentage(score) {
  return ((score / totalDegreeMax) * 100).toFixed(2);
}
    // Function to trigger when data.js has finished loading
    function onDataLoaded() {
      console.log("Data is loaded");
      // Call the searchStudent function when data.js is loaded
      searchStudent();
    }
// Function to search for a student by seating number or name
function searchStudent() {
  const searchInput = document.getElementById('searchInput').value.trim(); // Trim any leading/trailing spaces
  const searchResult = document.getElementById('searchResult');
  searchResult.innerHTML = '';

  document.getElementById('searchInput').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      searchStudent(); // Call the search function when the "Enter" key is pressed
    }
  });
    
  const matchedStudents = [];
  
  // Check if the entered value exists in the data dictionary as a seating number
  if (data.hasOwnProperty(searchInput)) {
    matchedStudents.push(data[searchInput]);
  }

  // Check if the entered value is a substring of any student's name
  for (const seatingNo in data) {
    if (data.hasOwnProperty(seatingNo) && data[seatingNo][0].includes(searchInput)) {
      matchedStudents.push(data[seatingNo]);
    }
  }

  if (matchedStudents.length > 0) {
    const table = document.createElement('table');
    table.classList.add('table', 'table-bordered', 'text-center'); // Add 'text-center' class to center the table
    const tableHeader = table.createTHead();
    const tableBody = table.createTBody();

    // Create table header row
    const headerRow = tableHeader.insertRow();
    const headers = {
      "arabic_name": "اسم الطالب باللغة العربية",
      "total_degree": "الدرجة",
      "student_case": "كود الحالة",
      "student_case_desc": "الحالة",
      "c_flage": "التعيين"
    };

    for (const key of data['seating_no']) {
      const th = document.createElement('th');
      th.scope = 'col';
      th.innerText = headers[key];
      th.classList.add('align-middle'); // Add 'align-middle' class to vertically center the text in header cells
      headerRow.appendChild(th);
    }

    // Add Percentage column header
    const thPercentage = document.createElement('th');
    thPercentage.scope = 'col';
    thPercentage.innerText = "النسبة المئوية";
    thPercentage.classList.add('align-middle'); // Add 'align-middle' class to vertically center the text in header cell
    headerRow.appendChild(thPercentage);

    // Create table data rows for matched students
    for (const studentData of matchedStudents) {
      const dataRow = tableBody.insertRow();
      for (let i = 0; i < studentData.length; i++) {
        const td = document.createElement('td');
        if (i === 1) { // For total_degree column, round the value to two decimal places
          const totalDegree = parseFloat(studentData[i]);
          td.innerText = totalDegree.toFixed(2);
        } else {
          td.innerText = studentData[i];
        }
        td.classList.add('align-middle'); // Add 'align-middle' class to vertically center the text in data cells
        dataRow.appendChild(td);
      }

      // Calculate and add the percentage column data
      const totalDegree = parseFloat(studentData[1]);
      const percentage = calculatePercentage(totalDegree);
      const tdPercentage = document.createElement('td');
      tdPercentage.innerText = `${percentage}%`;
      tdPercentage.classList.add('align-middle'); // Add 'align-middle' class to vertically center the text in data cell
      dataRow.appendChild(tdPercentage);
    }

    // Append the table to the searchResult div
    searchResult.appendChild(table);
  } else {
    // If no matching students found
    searchResult.innerHTML = '<p class="text-danger">No matching students found.</p>';
  }
}