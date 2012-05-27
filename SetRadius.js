function SetRadius(w,h)
{
	diag=Math.sqrt((w*w)+(h*h));
	radius=0.02*diag;
	return radius;
}