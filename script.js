//1. Создайте пустой массив с именем grades и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию Math.random().

const grades = [];
for (let i = 0; i < 12; i++) {
  grades.push(Math.floor(Math.random() * 100 + 1));
}
console.log(`Оценки студентов: ${grades}`);
//выводим оценки на страницу
const gradesText = document.querySelector('.grades')

gradesText.textContent = grades.join(', ');

//2. Рассчитайте и выведите средний балл студентов, используя методы массивов.
let sum = 0;
for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}
const averageGrade = Math.floor(sum / grades.length);

console.log(`Средний балл: ${averageGrade}`);
//выводим средний балл на страницу
const averageText = document.querySelector('.average');
averageText.textContent = averageGrade;
//3.Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
const maxGrade = Math.max(...grades)
console.log(`Максимальный балл: ${maxGrade}`)
//выводим на экран
const maxGradeText = document.querySelector('.max-grade');
maxGradeText.textContent = maxGrade;
//4.Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
const minGrade = Math.min(...grades);
console.log(`Минимальный балл: ${minGrade}`)
//выводим на экран
const minGradeText = document.querySelector('.min-grade');
minGradeText.textContent = minGrade;
//5.Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
const positiveGrades = grades.filter((item)=>{
    return item > 59;
})
const posititveGradesCount = positiveGrades.length;
console.log(`Количество положительных оценок: ${posititveGradesCount}`)
//выводим на экран
const positiveText = document.querySelector('.positive');
positiveText.textContent = posititveGradesCount;
//6.Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
const negativeGrades = grades.filter((item) => item < 60);
const negativeGradesCount = negativeGrades.length;

console.log(`Количество отрицательных оценок: ${negativeGradesCount}`)
//выводим на экран
const negativeText = document.querySelector('.negative');
negativeText.textContent = negativeGradesCount;

/*7.Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
 Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
 Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
Если оценка ниже 20, преобразуйте её в "E"*/
//Выведите все найденные значения на экран.
const letterGrades = grades.map((item) => {
    if (80 <= item  && item <= 100) {
        return 'A';
    }else if (60 <= item && item <= 79) {
        return 'B';
    } else if (40 <= item && item <= 59) {
        return 'C';
    } else if (20 <= item && item <= 39) {
        return 'D';
    } else {
        return 'F';
}
}

);
console.log(`Буквенные оценки: ${letterGrades}`)
//выводим на экран
const letterText = document.querySelector('.letter')
letterText.textContent = letterGrades.join(', ')