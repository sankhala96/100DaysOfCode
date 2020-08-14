export default (Arr) => {
    const len = Arr.length-1;
    for(let i=0; i<len; i++) {
        let swapped = false
        for(let j=1; j<=len-i; j++) {
            if(Arr[j-1] > Arr[j]) {
                let temp = Arr[j];
                Arr[j] = Arr[j-1];
                Arr[j-1] = temp;

                swapped = true;
            }
        }

        if(!swapped) break;
    }

    return Arr;
}