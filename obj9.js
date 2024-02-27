// You have an array of student data that contains their names and scores from different subjects. Your task is to calculate the average score for each student and display their names along with their average scores. 

// const studentData = [
//     { name: 'Arun', scores: [85, 92, 78] },
//     { name: 'Manu', scores: [76, 88, 91] },
//     { name: 'Veni', scores: [90, 85, 89] },
//     { name: 'Ann', scores:[93,90,89] }
//   ];
  

// //   Expected Output


//             // Arun: Average Score = 85.00
//             // Manu: Average Score = 85.00
//             // Veni: Average Score = 88.00
//             // Ann: Average Score = 90.67
const studentData = [
       { name: 'Arun', scores: [85, 92, 78] },
        { name: 'Manu', scores: [76, 88, 91] },
         { name: 'Veni', scores: [90, 85, 89] },
        { name: 'Ann', scores:[93,90,89] }
      ];
      for(data of studentData){
        let totalscore=0;
        for(score of data.scores){
          totalscore+=score;
        }
        const average=totalscore/data.scores.length;
        console.log(`${data.name}:Average Score =${average}`);
      }
