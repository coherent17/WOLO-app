import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

const Activity = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const numObjects = Math.floor(Math.random() * 6);
      const newObjects = Array.from({ length: numObjects }, () => {
        const x = Math.floor(Math.random() * 98) + 1;
        const y = Math.floor(Math.random() * 98) + 1;
        return { x, y };
      });
      setObjects(newObjects);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.car}>
        <View style={styles.carBox} />
      </View>
      <View style={styles.line} />
      <View style={styles.bottomRegion}>
        {objects.map((obj, i) => (
          <View key={i} style={[styles.objectBox, { left: obj.x + '%', bottom: obj.y + '%' }]}>
            <View style={styles.objectDot} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5',
    paddingTop: '1%',
  },
  car: {
    width: 50,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  carBox: {
    width: 50,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#555',
  },
  line: {
    height: 2,
    width: '100%',
    backgroundColor: '#bbb',
    marginTop: 20,
    marginBottom: 20,
  },
  bottomRegion: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  objectBox: {
    position: 'absolute',
    width: 50,
    height: 75,
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  objectDot: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
});

export default Activity;
