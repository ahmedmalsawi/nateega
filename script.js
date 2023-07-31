// The data dictionary provided
const data = {"seating_no": ["arabic_name", "total_degree", "student_case", "student_case_desc", "c_flage"], "1000500": ["\u0627\u062d\u0645\u062f \u0627\u0644\u0633\u064a\u062f \u0639\u0628\u062f\u0627\u0644\u0645\u0627\u0644\u0643 \u0627\u0644\u0645\u062f\u0646\u064a \u0627\u0644\u0634\u064a\u062e", 273.5, 1, "\u0646\u0627\u062c\u062d \u062f\u0648\u0631 \u0623\u0648\u0644", 3], "1000501": ["\u0627\u062d\u0645\u062f \u062e\u0627\u0644\u062f \u0632\u064a\u0646 \u0627\u0644\u0639\u0627\u0628\u062f\u064a\u0646 \u062d\u0633\u0646", 547.150024414063, 1, "\u0646\u0627\u062c\u062d \u062f\u0648\u0631 \u0623\u0648\u0644", 3], "1000502": ["\u0628\u0627\u0633\u0644 \u0645\u062d\u0645\u062f \u0633\u0639\u064a\u062f \u0637\u0646\u0637\u0627\u0648\u064a \u0639\u0628\u062f\u0627\u0644\u062c\u0648\u0627\u062f", 608.239990234375, 1, "\u0646\u0627\u062c\u062d \u062f\u0648\u0631 \u0623\u0648\u0644", 3], "1000503": ["\u062c\u0648\u0646\u0627\u062b\u0627\u0646 \u0645\u0627\u062c\u062f \u0645\u0644\u0627\u0643 \u062a\u0648\u0645\u0627\u0633", 626.710021972656, 1, "\u0646\u0627\u062c\u062d \u062f\u0648\u0631 \u0623\u0648\u0644", 3], "1000504": ["\u0631\u0634\u0627\u062f \u0639\u0628\u062f\u0627\u0644\u062a\u0648\u0627\u0628 \u0631\u0634\u0627\u062f \u0639\u0628\u062f\u0627\u0644\u062a\u0648\u0627\u0628", 632.809997558594, 1, "\u0646\u0627\u062c\u062d \u062f\u0648\u0631 \u0623\u0648\u0644", 3], "1000505": ["\u0639\u0628\u062f\u0627\u0644\u063a\u0641\u0627\u0631 \u0645\u062d\u0645\u062f \u0645\u062d\u0645\u0648\u062f \u0639\u0628\u062f\u0627\u0644\u063a\u0641\u0627\u0631", 618.830017089844, 1, "\u0646\u0627\u062c\u062d \u062f\u0648\u0631 \u0623\u0648\u0644", 3], "1000506": ["\u0639\u0645\u0631 \u0645\u0627\u0647\u0631 \u0628\u0634\u064a\u0631 \u0645\u0627\u0647\u0631 \u062f\u0627\u0648\u062f", 595.679992675781, 1, "\u0646\u0627\u062c\u062d \u062f\u0648\u0631 \u0623\u0648\u0644", 3], "1000507": ["\u0643\u0631\u064a\u0645 \u0645\u062d\u0645\u062f \u0627\u0628\u0631\u0627\u0647\u064a\u0645 \u0627\u0628\u0631\u0627\u0647\u064a\u0645 \u0639\u0628\u062f\u0627\u0644\u0646\u0628\u064a", 627.02001953125, 1, "\u0646\u0627\u062c\u062d \u062f\u0648\u0631 \u0623\u0648\u0644", 3], "1000508": ["\u0645\u0627\u0632\u0646 \u062d\u0633\u0646 \u062a\u0645\u0627\u0645 \u062d\u0633\u0646 \u062a\u0645\u0627\u0645 \u062d\u0633\u0646", 624.559997558594, 1, "\u0646\u0627\u062c\u062d \u062f\u0648\u0631 \u0623\u0648\u0644", 3], "1000509": ["\u0645\u062d\u0645\u062f \u0627\u062d\u0645\u062f \u0639\u0628\u062f\u0627\u0644\u0641\u062a\u0627\u062d \u062d\u0633\u064a\u0646", 575.940002441406, 1, "\u0646\u0627\u062c\u062d \u062f\u0648\u0631 \u0623\u0648\u0644", 3]};




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