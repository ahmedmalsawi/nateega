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


const data = {
    "seating_no": ["arabic_name", "total_degree", "student_case", "student_case_desc", "c_flage"],
    "1000500": ["أحمد السيد عبدالمالك المديني الشيخ", 636.25, 1, "ناجح دور أول", 3],
};




















const totalDegreeMax = 410; // Maximum total_degree score

// Function to calculate the percentage and round to two decimal places
function calculatePercentage(score) {
  return ((score / totalDegreeMax) * 100).toFixed(2);
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