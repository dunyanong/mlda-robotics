export function generateMetadataObject(seo: any) {
  const defaultImageUrl = `data:image/svg+xml,%3csvg width='1200' height='630' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='1200' height='630' fill='%23000000'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23FFFFFF' font-size='64' font-family='Arial, sans-serif'%3eMLDA Robotics%3c/text%3e%3c/svg%3e`;
  
  return {
    title: seo?.metaTitle || 'MLDA Robotics Team - Building Autonomous Systems', 
    description: seo?.metaDescription || 'MLDA Robotics Team under NTU EEE, building autonomous systems and winning ICRA competitions.', 
    openGraph: {
      title: seo?.ogTitle || seo?.metaTitle || 'MLDA Robotics Team - Building Autonomous Systems',
      description: seo?.ogDescription || seo?.metaDescription || 'MLDA Robotics Team under NTU EEE, building autonomous systems and winning ICRA competitions.',
      images: seo?.metaImage?.url ? [{ url: seo.metaImage.url }] : [{ url: defaultImageUrl }],
    },
    twitter: {
      card: seo?.twitterCard || 'summary_large_image',
      title: seo?.twitterTitle || seo?.metaTitle || 'MLDA Robotics Team - Building Autonomous Systems',
      description: seo?.twitterDescription || seo?.metaDescription || 'MLDA Robotics Team under NTU EEE, building autonomous systems and winning ICRA competitions.',
      images: seo?.twitterImage?.url ? [{ url: seo.twitterImage.url }] : [{ url: defaultImageUrl }],
    },
  }
}