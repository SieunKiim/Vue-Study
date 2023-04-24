interface Product{
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// function fetchProducts(): Promise<Product[]>{
    // Api 요청으로 상품 목록을 가져오는 비동기 처리
    // return new Promise<>();
// }


// 사용할 녀석들만 담은 인터페이스를 만들 수도 있겠지만,
// interface ProductDetail{
//     id: number;
//     name: string;
//     price: number;
// }


//아래와 같이 필요한 것만 골라서 객체를 하나 만드는 것과 같은 역할.
function displayProcductDetail(shoppingItem: Pick<Product, 'id'|'name'|'price'>){

}

// 특정 상품 정보를 업데이트 하는 함수 (파셜을 활용할 수 있음 - 약간 빌더 같은거지 java로 치면)
function updateProdectItem(productItem: Partial<Product>){

}

// 유틸리티 타입 구현하기 - Partial
interface UserProfile{
    username: string;
    email: string;
    profilePhotoUrl: string;
}

// 수정 1
// 인자들을 optional로 설정하여 파셜을 구현함
interface UpdateUserProfile{
    username?: string;
    email?: string;
    profilePhotoUrl?: string;
}

// 수정2
// 선언된 인터페이스를 활용한 타입 지정
type UpdateUserProfile2 = {
    username?: UserProfile['username'];
    email?: UserProfile['email'];
    profilePhotoUrl?: UserProfile['profilePhotoUrl'];
}

// 수정 3
// 반복문을 통한 수정
type UpdateUserProfile3 = {
    [p in 'username'|'email'|'profilePhotoUrl']?: UserProfile[p];
}


// 수정 4
// keyOf를 활용한 축약
type UpdateUserProfile4 = {
    [p in keyof UserProfile]?: UserProfile[p];
}

// 수정 5
// 제너릭을 활용한 파셜 구현

type myPartial<T> = {
    [p in keyof T]?: T[p];
}