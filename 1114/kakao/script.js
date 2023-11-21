async function getCityInfo() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value;
  
    const apiKey = '74237fda3cd6b05b3e343bb5aa55432e'; // 여기에 발급받은 API 키를 입력하세요
  
    try {
      // Kakao Local API를 사용하여 도시 정보 가져오기
      const response = await fetch(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${cityName}`, {
        headers: {
          Authorization: `KakaoAK ${apiKey}`,
        },
      });
      const cityData = await response.json();
  
      // 도시 정보를 화면에 표시
      const cityInfo = document.getElementById('cityInfo');
      if (cityData.documents.length > 0) {
        const firstCity = cityData.documents[0];
        cityInfo.innerHTML = `
          <h2>${firstCity.place_name}</h2>
          <p>주소: ${firstCity.address_name}</p>
          <p>카테고리: ${firstCity.category_name}</p>
        `;
      } else {
        cityInfo.innerHTML = `<p>해당 도시를 찾을 수 없습니다.</p>`;
      }
    } catch (error) {
      // 오류가 발생한 경우 메시지 표시
      const cityInfo = document.getElementById('cityInfo');
      cityInfo.innerHTML = `<p>도시 정보를 불러올 수 없습니다.</p>`;
    }
  }
  