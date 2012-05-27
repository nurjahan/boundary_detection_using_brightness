function RGBtoGray(image,w,h)
{
	GrayImage= new Array(h);
	for (i = 0; i <h; ++ i)
		GrayImage[i] = new Array(w);
	for (row=0; row<h; row++)
	{
		for(col=0;col<w;col++)
		{	
			GrayImage[row][col]=(((0.2989 *image[row][col][0])+(0.5870*image[row][col][1])+(0.1140*image[row][col][2]))).toFixed(4);
		}
	}
	return GrayImage;
}