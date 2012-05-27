function BrightnessMap(GrayImage,bin,w,h)
{
	BMap= new Array(h);
	for (i = 0; i <h; ++ i)
		BMap[i] = new Array(w);
	for (row=0; row<h; row++)
	{
		for(col=0;col<w;col++)
		{	
			BMap[row][col]=Math.ceil(((GrayImage[row][col])*bin).toFixed(4));
			if(BMap[row][col]<1)
				BMap[row][col]=1;
		}
	}
	return BMap;
}