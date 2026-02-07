from django.shortcuts import render
from .models import About


def about(request):
	"""
	Display the About page.
	"""

	about_page = About.objects.order_by('-updated_on').first()

	return render(
		request,
		"about/about.html",
		{"about": about_page},
	)
