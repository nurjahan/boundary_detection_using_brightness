function FeatureCombination(BrGm,Ort,w,h)
{
	var beta = new Array(2);
	for (i = 0; i <2; ++ i)
		beta[i] = new Array(1);
	var temp = new Array(w*h);
	for (i = 0; i <(w*h); ++ i)
		temp[i] = new Array(1);
	var probability=new Array(w*h);
	var Magnitude=new Array(w*h);
	var Orientation=new Array(w*h);
	for (i2 = 0; i2 <w*h; ++ i2)
	{
		Magnitude[i2] = new Array(beta[0].length);
		Orientation[i2] = new Array(beta[0].length);
		probability[i2] = new Array(beta[0].length);
		for (j2 = 0; j2 <w; ++ j2)
			probability[i2][j2] = new Array(Ort);
	}			
	for(i4=0;i4<w*h;i4++)
	{
		for(j4=0;j4<beta[0].length;j4++)
		{
			Magnitude[i4][j4]=0;
			Orientation[i4][j4]=0;
		}
	}	
	var maxMagnitude=new Array(h);
	var maxOrientation=new Array(h);
	for (i2 = 0; i2 <h; ++ i2)
	{
		maxMagnitude[i2] = new Array(w);
		maxOrientation[i2] = new Array(w);
	}	
	
	beta[0][0]=-3.6944;
	beta[1][0]=2.7430;
	for(var i=0;i<=7;i++)
	{
		y=0;
		for(j=0;j<w;j++)
		{
			for(k=0;k<h;k++)
			{
				temp[y][0]=BrGm[k][j][i];
				y++;
			}
		}
		var fcmb = new Array(w*h);
		for (i1 = 0; i1 <(w*h); ++ i1)
			fcmb[i1] = new Array(2);
		for(j1=0;j1<temp.length;j1++)
		{
			fcmb[j1][0]=1;
			fcmb[j1][1]=temp[j1][0];
		}
		var mult = new Array(fcmb.length);
		for (i2 = 0; i2 <fcmb.length; ++ i2)
		{
			mult[i2] = new Array(beta[0].length);
		}	
		for(i3=0;i3<fcmb.length;i3++)
		{
			for(j3=0;j3<beta[0].length;j3++)
			{
				mult[i3][j3]=0;
				for(k3=0;k3<fcmb[0].length;k3++)
				{
					mult[i3][j3]=mult[i3][j3]+(fcmb[i3][k3]*beta[k3][j3]);	
				}
				probability[i3][j3][i]=(1/(1+(Math.exp(-mult[i3][j3])))).toFixed(4);
				if(probability[i3][j3][i]>Magnitude[i3][j3])
				{
					Magnitude[i3][j3]=probability[i3][j3][i];
					Orientation[i3][j3]=i;
				}
			}
		}	
	}
	m=0;
    for(i=0;i<w;i++)
	{
		for(j=0;j<h;j++)
		{
			maxMagnitude[j][i]=Magnitude[m][0];
			m++;
		}
	}
	return [maxMagnitude,Orientation];
}