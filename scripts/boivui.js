var desc = new Array();

for (i = 0;i < 11; i++)
{
	desc[i] = new Array();
}

desc[0][0] = '<p>Tình yêu của bạn và người ấy đẹp như mơ. Nhưng mà tốt hơn là bạn nên thức giấc đúng lúc.</p>'
desc[0][1] = '<p>Người ấy có thể là một nửa của bạn đó. Bạn hãy cố gắng lên!</p>'
desc[0][2] = '<p>Một chút lãng mạn sẽ làm tình yêu thêm bay bổng, một bông hồng sẽ làm trái tim sỏi đá trở nên nồng ấm.</p>'

desc[1][0] = '<p>Hãy lắng nghe con tim bạn nói. Nhưng đừng nói những gì bạn nghe được cho người ấy biết.</p>'
desc[1][1] = '<p>Bạn là người sôi nổi, bạn hay bông đùa. Nhưng bạn như con miu ngoan ngoãn bên cạnh người ấy.</p>'
desc[1][2] = '<p>Đôi khi bạn nên nịnh người ấy một chút, điều đó sẽ làm người ấy hạnh phúc.</p>'

desc[2][0] = '<p>Bạn hãy tự tin, người ấy cũng đang nghĩ về bạn đấy.</p>'
desc[2][1] = '<p>Hoa đang nở trong tâm hồn bạn. Bạn thấy xao xuyến vì người ấy. Còn người ấy đang trồng cây si bạn đấy.</p>'
desc[2][2] = '<p>Tình yêu không đến từ một phía. Bạn hãy bật đèn xanh đi.</p>'

desc[3][0] = '<p>Bạn hãy khéo léo hơn, nếu không bạn và người ấy mãi mãi là hai đường thẳng song song.</p>'
desc[3][1] = '<p>Hãy quan tâm đến người ấy hơn nữa, nếu không bạn sẽ mất người ấy đấy.</p>'
desc[3][2] = '<p>Người ấy chỉ nghĩ về bạn như một người bạn thân. Luôn luôn là như vậy.</p>'

desc[4][0] = '<p>Bạn đang chờ đợi một tình yêu lãng mạn như phim Hàn Quốc, nhưng mà kết cuộc của sự lãng mạn coi chừng là... lãng xẹt.</p>'
desc[4][1] = '<p>Người ấy có thể là thần tượng của bạn, nhưng người ấy có thể không phải là người yêu tuyệt vời.</p>'
desc[4][2] = '<p>Có thể là bạn hiểu lầm, có thể là máy tính ngu ngốc, nhưng người ấy chỉ coi bạn như một người bạn.</p>'

desc[5][0] = '<p>Bạn nghĩ về người ấy nhiều hơn là người ấy nghĩ về bạn.</p>'
desc[5][1] = '<p>Người ấy đang nhớ về "góc phố dịu dàng với ly chè kem mỗi chiều", nơi có hình bóng con mèo con.</p>'
desc[5][2] = '<p>Bạn còn chờ gì nữa? Sao không thử "iu" đi.</p>'

desc[6][0] = '<p>Đừng tin những gì người khác nói, tình cảm phải được xây dựng trong sự tin tưởng lẫn nhau.</p>'
desc[6][1] = '<p>Hãy thử thay đổi bản thân, người ấy cần sự dịu dàng và thông cảm.</p>'
desc[6][2] = '<p>Bạn hãy trân trọng những gì bạn đang có. Tình yêu sẽ vỗ cánh bay xa nếu bạn không nâng niu.</p>'

desc[7][0] = '<p>Trong tình yêu không có sự giả dối, sự chân thật sẽ làm người ấy hiểu.</p>'
desc[7][1] = '<p>Bạn hãy yêu bằng cả trái tim chân thành. Nhưng sự "nóng bỏng" hãy để dành cho tương lai.</p>'
desc[7][2] = '<p>Đừng biến trái tim bạn thành trái tim mùa đông. Tình yêu vẫn đang mỉm cười đâu đó.</p>'

desc[8][0] = '<p>Bạn phải biết chờ đợi trong tình yêu. Chờ đợi vất vả, kết quả lâu bền.</p>'
desc[8][1] = '<p>Đừng đi quá xa hơn tình bạn. Bởi vì bạn không hợp với người ấy đâu.</p>'
desc[8][2] = '<p>Bạn sẽ phải trải qua rất nhiều thử thách để có được người ấy. Nhưng hãy say đắm 70% thôi.</p>'

desc[9][0] = '<p>Coi chừng bạn là kẻ thứ 3. Nhưng trong tình yêu không có kẻ đến trước hay người đến sau. Chỉ có ai yêu ai thôi.</p>'
desc[9][1] = '<p>Bạn và người ấy gần thì gây nhưng xa thì nhớ, phải kiên nhẫn và dịu dàng hơn.</p>'
desc[9][2] = '<p>Bạn sinh ra là để gặp người ấy, nhưng yêu lại là chuyện khác.</p>'

desc[10][0] = '<p>Bạn và người ấy là "người dưng khác họ".</p>'
desc[10][1] = '<p>Hãy thử cho bản thân một cơ hội và cơ hội sẽ đến với bạn.</p>'
desc[10][2] = '<p>Không phải bạn đang đùa đấy chứ. Bạn là người bản lãnh, hãy tự quyết định chuyện của bạn!</p>'

function getDescription(level)
{
	var r = Math.floor(Math.random() * 10) % 2;
	if(level < desc.length - 1 && level >= 0)
		return desc[level][r];
	return desc[desc.length - 1][r];
}

function BoiTinhYeu(pA, pB)
{
	var da = '', db = '';
	var psnA = pA.toUpperCase(), psnB = pB.toUpperCase();
	
	for(i = 0;i < psnA.length; i++)
	{
		if(psnB.indexOf(psnA.charAt(i)) == -1)
			da += psnA.charAt(i);
	}
	
	for(i = 0;i < psnB.length; i++)
	{
		if(psnA.indexOf(psnB.charAt(i)) == -1)
			db += psnB.charAt(i);
	}
	
	stra = isFemale.checked ? 'anh ấy' : 'cô ấy';
	strb = isFemale.checked ? 'Anh ấy' : 'Cô ấy';
	
	document.getElementById("KetQua").innerHTML  = '<p>Tỉ số giữa bạn và người ấy là ' + da.length + ' - ' + db.length + '</p>';
	document.getElementById("KetQua").innerHTML += '<p>Đối với bạn:</p>' + getDescription(da.length).replace('người ấy', stra).replace('Người ấy', strb);
	document.getElementById("KetQua").innerHTML += '<p>Đối với người ấy:</p>' + getDescription(db.length);
}