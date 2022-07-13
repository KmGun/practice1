export default function register(){
    const register = document.getElementById('register'),
        id = document.getElementById('jsId'),
        pw = document.getElementById('jsPw'),
        pw2 = document.getElementById('jsPw2'),
        registerBtn = document.getElementById('jsRegisterBtn'),
        idOverlapCheckBtn = document.getElementById('jsIdOverlapCheckBtn');

    // get ready
        // vaildity checking functions
            // RegExp
                // ID : 영문자로 시작하는 6~20자 영문자 또는 숫자
                function isId(asValue) {
                    var regExp = /^[a-z]+[a-z0-9]{5,19}$/g;

                    return regExp.test(asValue);
                };
                //PW : 8 ~ 16자 영문, 숫자, 특수문자를 최소 한가지씩 조합
                function isPassword(asValue) {
                    var regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
                
                    return regExp.test(asValue);
                }


                // validity check : alert & return true if vaild
                function isVaild(){
                    if (isId(id.value)){
                        if (isPassword(pw.value)){
                            if (pw.value === pw2.value){
                                return true;
                            } else {
                                alert('재확인 비밀번호가 일치하지 않습니다.')
                                return false;
                            }
                        } else {
                            alert('비밀번호가 없거나, 형식이 일치하지 않습니다.')
                            return false;
                        }
                    } else {
                        alert("아이디가 없거나, 형식이 일치하지 않습니다.");
                        return false;
                    }
                }

                
    
        // overlap check functions
        async function idOverlapCheck(){
            // 1. make POST data
            const data = {
                'id' : id.value
            };
            // 2. set POST options 
            const reqOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            //3. overlap checking
            const isIdOverlap = await fetch('http://localhost:3006/auth/register/idoverlapcheck',reqOptions)
                    .then(response => response.json())
                    .then(dat =>  dat.isIdOverlap);
            return isIdOverlap;
        };

        function alertResult(isIdOverlap){
            if (isIdOverlap){
                alert('Id가 이미 존재합니다.');
            } else {
                alert('Id가 사용 가능합니다.')
            }
        };


////////////////////////// main code ///////////////////////////////

    // overlap check &format validity check & fetch to server
        let overlapCheckStatus = false;
        let isIdOverlap = false;
        // overlap check
        idOverlapCheckBtn.addEventListener('click',async function(){
            isIdOverlap = await idOverlapCheck();
            alertResult(isIdOverlap);
            overlapCheckStatus = true;
        })
        
        id.addEventListener('input',function(){
            overlapCheckStatus = false;
            isIdOverlap = false;
        })
        // format validity check
            
            registerBtn.addEventListener('click',async function(){
                if (overlapCheckStatus && !isIdOverlap){
                    // 1. make registerData to JSON
                    const registerData = {
                        'id' : id.value,
                        'pw' : pw.value
                    };
                    // 2. set reqOptions
                    const reqOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(registerData)
                    };
        
                    // 3. vailidity check => fetch to server 
                    if (isVaild()){
                        const isRegisterSuccessed = await fetch('http://localhost:3006/auth/register',reqOptions)
                            .then(response => response.json())
                            .then(dat => dat.isRegisterSuccessed);


                    } else{
                        id.value = '';
                        pw.value = '';
                        pw2.value = '';
                    };
                } else if(overlapCheckStatus && isIdOverlap){
                    alert('Id가 중복입니다.')
                } else if (!overlapCheckStatus){
                    alert('Id중복 체크를 해주세요')
                } else{
                    alert('^^ㅣ발')
                }
                


            });
       
        



        



    // if valid, fetch(POST) Register data
    



    



    function init(){

    };

    init();














        

}
