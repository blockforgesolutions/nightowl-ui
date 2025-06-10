import React, { useState, useEffect } from 'react';

export const SkeletonBox = ({ className = "", animate = true }) => (
    <div className={`bg-gray-300 rounded ${animate ? 'animate-pulse' : ''} ${className}`}></div>
);

export const SkeletonText = ({ lines = 1, className = "" }) => (
    <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
            <div key={i} className={`h-4 bg-gray-300 rounded animate-pulse ${i === lines - 1 && lines > 1 ? 'w-3/4' : 'w-full'
                }`}></div>
        ))}
    </div>
);

export const CardSkeleton = ({ children, className = "" }) => (
    <div className={`bg-white rounded-lg shadow-md border p-6 ${className}`}>
        {children}
    </div>
);

export const StatCardSkeleton = () => (
    <CardSkeleton>
        <div className="flex items-center justify-between">
            <div className="flex-1">
                <SkeletonBox className="h-4 w-20 mb-2" />
                <SkeletonBox className="h-8 w-16" />
            </div>
            <SkeletonBox className="h-12 w-12 rounded-full" />
        </div>
    </CardSkeleton>
);

export const ChartSkeleton = () => (
    <CardSkeleton>
        <SkeletonBox className="h-6 w-32 mb-4" />
        <div className="flex items-end space-x-2 h-48">
            {Array.from({ length: 12 }).map((_, i) => (
                <SkeletonBox
                    key={i}
                    className={`flex-1 ${Math.random() > 0.5 ? 'h-full' : `h-${Math.floor(Math.random() * 8 + 4) * 4}`}`}
                />
            ))}
        </div>
        <div className="flex justify-between mt-4">
            {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonBox key={i} className="h-3 w-8" />
            ))}
        </div>
    </CardSkeleton>
);

export const ListCardSkeleton = () => (
        <div className="flex gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
                <CardSkeleton className='w-64 h-32 flex'>
                    <div key={i} className="flex items-center space-x-3">
                        <SkeletonBox className="h-8 w-8 rounded-full flex-shrink-0" />
                        <div className="flex-1">
                            <SkeletonBox className="h-5 w-32 mb-2" />
                            <SkeletonBox className="h-4 w-24" />
                        </div>
                    </div>
                </CardSkeleton>
            ))}
        </div>
);

export const TableSkeleton = () => (
    <CardSkeleton>
        <SkeletonBox className="h-6 w-40 mb-4" />
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <th key={i} className="text-left p-3">
                                <SkeletonBox className="h-4 w-20" />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 6 }).map((_, rowIndex) => (
                        <tr key={rowIndex} className="border-t">
                            {Array.from({ length: 5 }).map((_, colIndex) => (
                                <td key={colIndex} className="p-3">
                                    <SkeletonBox className={`h-4 ${colIndex === 0 ? 'w-24' : colIndex === 1 ? 'w-32' : 'w-16'
                                        }`} />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </CardSkeleton>
);

export const ProfileSkeleton = () => (
    <CardSkeleton>
        <div className="flex items-center space-x-4">
            <SkeletonBox className="h-16 w-16 rounded-full" />
            <div className="flex-1">
                <SkeletonBox className="h-5 w-32 mb-2" />
                <SkeletonBox className="h-4 w-24 mb-1" />
                <SkeletonBox className="h-3 w-20" />
            </div>
        </div>
    </CardSkeleton>
);

export const ActivitySkeleton = () => (
    <CardSkeleton>
        <SkeletonBox className="h-6 w-28 mb-4" />
        <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-start space-x-3">
                    <SkeletonBox className="h-8 w-8 rounded-full flex-shrink-0" />
                    <div className="flex-1">
                        <SkeletonText lines={2} />
                        <SkeletonBox className="h-3 w-16 mt-2" />
                    </div>
                </div>
            ))}
        </div>
    </CardSkeleton>
);

// Mini Loading Components
export const ButtonSkeleton = ({ size = 'md' }) => {
    const sizeClasses = {
        sm: 'h-8 w-16',
        md: 'h-10 w-20',
        lg: 'h-12 w-24'
    };

    return <SkeletonBox className={`${sizeClasses[size]} rounded-md`} />;
};

export const BadgeSkeleton = () => (
    <SkeletonBox className="h-6 w-12 rounded-full" />
);

export const AvatarSkeleton = ({ size = 'md' }) => {
    const sizeClasses = {
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-16 w-16'
    };

    return <SkeletonBox className={`${sizeClasses[size]} rounded-full`} />;
};

export const InputSkeleton = () => (
    <div className="space-y-2">
        <SkeletonBox className="h-4 w-16" />
        <SkeletonBox className="h-10 w-full rounded-md" />
    </div>
);

export const NavItemSkeleton = () => (
    <div className="flex items-center space-x-3 p-2">
        <SkeletonBox className="h-5 w-5" />
        <SkeletonBox className="h-4 w-20" />
    </div>
);
