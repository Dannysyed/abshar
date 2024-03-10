export const shareEvent = (event, platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${event.title} - ${event.description}`);

    switch (platform) {
        case 'facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
            break;
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
            break;
        case 'linkedin':
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
            break;
        default:
            break;
    }
};
