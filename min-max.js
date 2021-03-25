function findMinMax() {
    let array = [50, 60, 20, 80, 1, 30];
    var minValue = Math.max(...array);
    var maxValue = Math.min(...array);
    $('.min').append(maxValue);
    $('.max').append(minValue);
}