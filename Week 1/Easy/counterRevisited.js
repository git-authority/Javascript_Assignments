function counter(start, end, delay) {

    console.log(start);


    if (start < end) {

        setTimeout(() => {
            counter(start + 1, end, delay);
        }, delay);
    }
}


counter(1, 10, 1000);