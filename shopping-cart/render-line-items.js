export function findById(arrayOfWines, beaujolais) {
    let wineMatch = {};

    for (let i = 0; i < arrayOfWines.length; i++) {
        const wineBottle = arrayOfWines[i];

        if (wineBottle.id === beaujolais) {
            wineMatch = wineBottle;

        }
    }
    return wineMatch;
}