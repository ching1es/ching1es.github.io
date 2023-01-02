function readImage(input) {

    // input tag에 파일이 있는 경우
    if(input.files && input.files[0]) {

        //new연산자 FileReader생성자 *new 연산자를 사용해야만 FileReader함수 내부의(내용)을 const 변수에 대입 할 수 있다.
        const reader = new FileReader()

        // 이미지가 로드가 다 된 경우 
        //onload = 비동기적 실행
        // reader에 파일 객체가 load된 이후에 src 값이 변경되도록 onload 이벤트로 처리해야 한다.
        reader.onload = e => {
            const previewImage = document.getElementById("profile-img")

            previewImage.src = e.target.result
        }

        // reader가 이미지 읽도록 하기 readAsDataURL = file 읽어오는 역활
        reader.readAsDataURL(input.files[0]);
    }
}

// input file에 change 이벤트 부여
const inputImage = document.getElementById("avatar")
inputImage.addEventListener("change", e => {
    readImage(e.target)
})
// currentSrc

